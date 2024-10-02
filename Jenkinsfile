pipeline {
    agent any

    tools {
        nodejs "nodejs-18"
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
    }
}