## Setup

1. Start by installing all the dependencies by executing `npm install`.
2. Deploy the template by executing `aws cloudformation --stack-name <name> --template-file template.yml --region eu-west-1`
4. After it has been deployed, Data Api has to be enabled as well. `aws rds modify-db-cluster --db-cluster-identifier <database-id> --enable-http-endpoint --region eu-west-1`
3. Copy `.env.example` to `.env` and assign the values. TIPS: You can find all values in the stack output.
4. Run the tests by executing `npm test`
