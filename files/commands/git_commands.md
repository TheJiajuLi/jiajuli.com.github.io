```
mkdir #create a sub-directory to the current dirctory
```

```
del file #delete the file
```

```
cd dir #move to the selected dirctory
```

```
cd .. #move back to the parent directory
```

```
git config global user.name name
```

```
git config global user.email email
```

```
git init #this will initialize your project
```

```
touch filename.extension #this will add a file to the change
```

```
git status
```

```
git add filename #this will staging the file you just added to the changegit add filename (Adding the file to the Staging Environment/ Index)
```

```
git rm --cached filename #this will unstage the file you just staged
```

```
git add . #add/ stage all the files in the current directory
```

```
git rm --cached . #unstage all the files that has been staged to the directory
```

```
git commit -m "Description" #commit the file(s) to the commit with a descriptive notes
that will shown on the log
```

```
git checkout -b branchname #as what it means, temporarily hide the commit
```

```
git branch #re-shown/ rend the commit
```

```
git log commit_id #check the specific commit happened in the past, its description, time-point and its author
```

```
git log --oneline #view the commit log in a ordered list
```

```
checkout commit-id #go back to the source before this specific commit with this id is created
```

```
git checkout brach (e.g: 'Master') #go back to the original souce with the commit has made with the branch
```

```
git revert commit-id #remove this typical commit from the branch
```

```
:+wq+ENTER #exit the prompt page
```

```
git reset commit_id
```

```
git reset commit_id hard #Wipe off all the changes made to the project after the specific commite has made
```

```
git branch branchname #create a new branch
```

```
git branch -a #Save the branch just created and show the branch
list so far
```

```
git checkout branchname #Switch to the new branch
```

```
git branch -D branch_name #delete the branch just created from the project
```

```
git checkout -b branch_name #create a new branch and switch the main branch to it
/ set it as the current branch
```

```
git master(master branch)
```

*then*

```
git merge the_name_of_the_branch_you_are_happy_about #this will merge the
new commit that has made in that branch to the master branch
```

```
git branch -m master main #rename the master branch name to main
```

```
git remote add origin your_github_remote_repository_url #you can do this to 
rename your tedious url into the name/ tag-origin for conviniece
```

*If you want to delete the origin url, you do this:*

```
git remote remove the_same_github_url_you_just added
```

*To check the origin(s) you added so far:*

```
git remote -v
```

*Finally, you want to added your the new origin and ready to push the local repository and share it to a remote one:*

```
git push -u origin main
```

***Done***

When-rmdir project_1 -->The directory is not empty. Error shows-

```
del /f /s /q mydir 1>nul
rmdir /s /q mydir
```

```
git reset HEAD <file_name> #This will unstage the staging file
```

```
git clone github.url #this will clone a existed remote repository to your computer
```

```

```
