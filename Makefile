build:
	hugo

serve:
	hugo serve

deploy:
	make build
	aws s3 sync --delete --acl=public-read ./public s3://jasonwright-poetry/ | tee
	aws cloudfront create-invalidation --distribution-id=E2NOWJW01ZUL9H --paths '/*' | tee

publish: deploy