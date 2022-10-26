export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "awsintelligentrouteo8d501961": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "geo": {
        "amplifymapdemo": {
            "Name": "string",
            "Style": "string",
            "Region": "string",
            "Arn": "string"
        },
        "amplifydemoplaces": {
            "Name": "string",
            "Region": "string",
            "Arn": "string"
        }
    },
    "api": {
        "awsintelligentrouteo": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "function": {
        "awsintelligentrouteopowertools": {
            "Arn": "string"
        },
        "routeOptimizerFn": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    }
}