# git under the hood 

### lecture 1 - foundation: 

> core: git is a** key-value pair**, the key is the hash, the value is the data, you use the key to retrive the content!
	
> \**content produces key**.  if the content is the same, the SHA1 key will be the same!
	
> git doesnt store empty directories
	
> identical content is only stored once!
	
> tree points to other trees and blobs

> git compress: the difference between a version and the next is called 'delta', git objects and 'delta' are store in a 'packfile',
>
> when the git repo is too big, after a push, normally sees message called 'compressing delta' and wont be able to peek at them

> commits: just like other git objects, commit object points to a tree, contains auth, date, message, and parent commit!
> a SHA1 a hash of the all those information 
>
> when a new branch is created, git does not automatically switch to the new branch.


- set up github 

	> Go to Credential Manager from Control Panel => Windows Credentials => find git:https://github.com => Edit => On Password replace with with your GitHub Personal Access Token => You are Done

		$ git config --global user.name "your_github_username"
		$ git config --global user.email "your_github_email"
		$ git config -l


- create a project 

		git init 

- clone a project 

		git clone <path-to-repo>


- create a branch
		> still at the same branch, does not switch to the created branch
		git branch <branch_name>

- checkout branches

- add file from the staging area

		git add <path-to-file>
		git add .

- remove file from the staging area
		git reset <path-to-file>
		git reset .

- make a commit 

		git commit -m <comment>

- open file/folder in terminal via vs code 
		
		code -r . | code .

- open file with default application 

		open <file> 

- open file with certain application 

		open <file> -a 'Visual Studio Code'	


### lecture 2 - working area, staging area, repo

- working area: files in working area  = untracked files

- staging area:  files are going to be in your next commit! that's how git knows what is the difference between your current commit and next commit!

- repo: contains all the commits! git knows!

- get in & out of staging area: add,remove,move(rename)

		git add <filename>
		git rm <filename>
		git mv <old filename> <new filename>

- stashing commands

		git stash
		git stash --include-untracked  
		git stash save 'name of the stash'
		git checkout <stash name> -- <filename>  grab a file from a stash 
		git stash pop 
		git stash drop
		git stash clear
		git stash list
		git stash -p
		git stash show
		git stash apply stash@{0}



### lecture 3 - references commits and branches

- branch: a pointer to a commit , the point of the current branch is going to change when a new commit is made.

- HEAD: the current branch, what the parent of the next commit will be, it is pointer! 

		git checkout master 
		cat .git/HEAD

		git checkout example
		cat .git/HEAD

		git show-ref --heads : check branches 
		git cat-file -p SHA1 : check branch info( type SHA1 author committer )

-	when checkout a commit, git will be in 'detached HEAD' state
	> You are in 'detached HEAD' state. You can look around, make experimental changes and commit them, and you can discard any commits you make in this state without impacting any branches by switching back to a branch.
	> 
	> If you want to create a new branch to retain commits you create, you may do so (now or later) by using -c with the switch command. Example:

	- solution: do not keep changes made after arriving in 'detached' state

  			git switch -c <old-branch-name>
			git checkout <old-branch-name>

 	- solution:  keep changes made after arriving in 'detached' state

 		 	git switch -c <new-branch name>

	- solution: keep the dangling commits before leave the 'detached head' state

			git branch <new-branch-name> <dangling commit hash>
	

### lecture 4 - tags and annotated tags

- light weight tags = named pointer to a commit

	- create a new tag

			git tag <tag-name>

	- check all tags

			git tag

	- check all tags and the commits they are pointing to: 

			git show-ref --tags

	- check all the tags points at a specific commit

		 	git tag --points-at < optional SHA1>

	- show tag content : shows all the infomation about the current tag, includes the metadata
			
			git show <tag-name>    


### merging and rebasing

> merge are just commits with multi-parents 
>
> git merge is used to combine 2 or more commits into 1! 
> in most cases, it is used to combine two differnet branches
>
>
> fast-forward merge: happens when there is a linear path from base to target branch 
> git-merge --no-ff: prevents fast-forward merge
	> fast-forward merge : git just moves your branch pointer to point at the incoming commit 
	> why prevent it: typically because you want to maintain a specific branch topology | you're merging in a topic branch and you want to ensure it looks that way when reading history

		git merge <branch-name>
		git branch -d <branch-name>

> git rerere: reuse recorded resolution

		git rerere.enabled true 
		
> ~ and ^ difference 
### Advanced git tricks

- view .git folder

		tree .git

		git cat-file -t 000000

		git cat-file -p 000000

- check commits: git log / git show

		git log --oneline 
		git log --since=="yesterday"
				--author=nina 
				--since=2.weeks
				--diff-filter=R 
				--find-renames
				--name-status
				--follow
				--grep=i18n
		git show <hash> --stat --online

- view the tree, blob and commit objects

	- tree object SHA1 is under .git/objects
	- commit SHA1 can be listed use git log (--oneline)

			git cat-file -t 000000	 type
			git cat-file -p 000000  content 

- view the contents of the staging area

- list all the files under the dir

		git ls-files -s 

- interactively add changes to staging area

		git add -p 

- reset   

		git reset <filename>     <= only reset the staging area
		git reset --hard HEAD~   <= copy parent to working and staging 
		git reset --soft HEAD~   <= copy parent to staging
		git reset --mixed HEAD~  <= default
		git reset --ORIG_HEAD	 <= to prev HEAD, In case of acciental git reset

- undo a commit 

		git revert <hash> <= make another commit thats the mirror opposite of the <hash> commit

- list all the files in a commit 

		git diff-tree
		git diff-tree --name-only -r <SHA1>

- git branch 

	check which branches are merged or not merged to "master" branch

		git branch --merged master
				   --no-merged master