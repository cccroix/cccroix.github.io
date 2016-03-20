autocmd BufRead,BufNewFile *.md set filetype=markdown
autocmd FileType markdown setlocal spell
set spelllang=fr
set spellfile=../fr.utf-8.add
set complete+=kspell
set secure
