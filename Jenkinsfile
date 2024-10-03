pipeline {
    agent any

    tools {
        nodejs "nodejs-18"
    }

    environment {
        FLY_API_TOKEN = credentials('FLY_TOKEN_TEST')  // Reemplaza 'FLY_TOKEN_TEST' con el ID correcto de tu credencial
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Install dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        stage('Run tests') {
            steps {
                echo 'Running tests...'
                sh 'npm run test'
            }
        }
        stage('Deploy to Fly.io') {
            steps {
                echo 'Deploying to Fly.io...'
                sh 'flyctl deploy --access-token $FLY_API_TOKEN'  // Utiliza la credencial en el despliegue
            }
        }
    }
}