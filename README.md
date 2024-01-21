# Shaohang Wei's Homepage

This repository is for Shaohang Wei's homepage that is powered by GitHub Pages.

## Structure

- \_includes: basic html format files that is the base of all pages
- \_layouts: basic html format files that is constructed based on files in "\_includes"
- \_data: the files organized by ymls
  - authors.yml: authors' information
  - navigation.yml: how to navigate the pages of the site
  - text.yml: text that is about the buttons or something else
- \_posts: <u>blog markdown files should be released here</u>, because in the index.md in directory "blog",  the layout is from this directory
  - Actually, in './\_config.yml', it is defined that the path of blogs (whose type is 'posts') is './_posts'
    - ![Posts defaults in ./\_config.yml](C:\Users\魏少杭\AppData\Roaming\Typora\typora-user-images\image-20240121193436865.png)
  - **rename requirement**: "yyyy-mm-dd-SIMPLE-NAME.md"
- _sass: so-simple theme's assets files
- assets: seemingly nothing useful
- backup: things to back up
- blog: just a .md that defined the page
- data: maybe useful
- images: all images are saved here
- pdf: some paper or cv should be saved here
- search: just like blog directory, only the index.md
- tag: just like blog directory, only the index.md



So, if you want to add some kinds of pages, follow the following steps, for example, if you want to add a part named "hobby": 

- Firstly, make a directory, "./hobby"
- Secondly, write the "./\_data/navigation.yml"
- Thirdly, add the index.md with the layout correctly written in the page above.

