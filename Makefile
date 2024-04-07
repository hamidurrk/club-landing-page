# Git push simplification
.PHONY: gitpushall

gitpushall:
	git fetch
	git pull
	git add .
	git commit -m "$(m)"
	git push