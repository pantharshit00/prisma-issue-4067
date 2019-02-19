# Introduction

Reproduction for https://github.com/prisma/prisma/issues/4067

## To reproduce

1. Clone repo and deploy the prisma server
2. run prisma deploy and prisma generate for first bug
3. change datamodel to datamodel2 in prisma.yml
4. run prisma deploy and prisma generate for second bug
