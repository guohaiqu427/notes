class ScrollSequence {
    constructor(opts) {
      this.opts = {
        container: 'body',
        starts: 'out',
        ends: 'out',
        imagesRoot: '',
        cover: false,
        ...opts
      }
      this.container = typeof opts.container === 'object' ?
        opts.container :
        document.querySelector(opts.container);

      this.scrollWith = !opts.scrollWith ?
        this.container :
        typeof opts.scrollWith === 'object' ?
          opts.scrollWith :
          document.querySelector(opts.scrollWith);

      this.images = Array(opts.images.length);
      this.imagesToLoad = opts.images;
      this.priorityFrames = opts.priorityFrames;

      this.loader = new ImgLoader({
        imgsRef: this.images,
        images: this.imagesToLoad,
        imagesRoot: this.opts.imagesRoot,
        priorityFrames: this.priorityFrames
      });

      this.canvas = new Canvas({
        container: this.container,
        images: this.images,
        cover: this.opts.cover
      });

      this.init();
    }

    init() {
      this.canvas.setup();
      this.loader.once('FIRST_IMAGE_LOADED', () => {
        this.canvas.renderIndex(0);
      })
      this.loader.once('PRIORITY_IMAGES_LOADED', () => {
        window.addEventListener('scroll', () => this.changeOnWindowScroll());
      })
      this.loader.once('IMAGES_LOADED', () => {
        console.log('Sequence Loaded');
      })
    }

    changeOnWindowScroll() {
      const step = 100 / (this.images.length - 1);
      const mapToIndex = Math.floor(this.percentScrolled / step);
      requestAnimationFrame(() => this.canvas.renderIndex(mapToIndex));
    }

    get percentScrolled() {
      const {starts, ends} = this.opts;
      const el = this.scrollWith;
      const doc = document.documentElement;
      const clientOffsety = doc.scrollTop || window.pageYOffset;
      const elementHeight = el.clientHeight || el.offsetHeight;
      const clientHeight = doc.clientHeight;
      let target = el;
      let offsetY = 0;
      do {
          offsetY += target.offsetTop;
          target = target.offsetParent;
      } while (target && target !== window);

      let u = (clientOffsety - offsetY);
      let d = (elementHeight + clientHeight)

      if (starts === 'out') u += clientHeight;
      if (ends === 'in') d -= clientHeight;
      if (starts == 'in') d -= clientHeight;
      // start: out, ends: out
      // const value = ((clientOffsety + clientHeight) - offsetY) / (clientHeight + elementHeight) * 100;

      //start: in, ends: out
      // const value = (clientOffsety - offsetY) / (elementHeight) * 100;

      //start: out, ends: in
      // const value = ((clientOffsety + clientHeight) - offsetY) / (elementHeight) * 100;

      // Start: in, ends: in
      // (clientOffsety - offsetY) / (elementHeight - clientHeight)

      const value = u / d * 100;
      return value > 100 ? 100 : value < 0 ? 0 : value;
    }
  }
