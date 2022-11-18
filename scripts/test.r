# idk what this does but it prints permutations of the inputted string

needs(magrittr)
set.seed(512)
do.call(rep, input) %>% 
  strsplit(NULL) %>% 
  sapply(sample) %>% 
  apply(2, paste, collapse = "")