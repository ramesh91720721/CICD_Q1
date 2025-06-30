pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git url: 'https://github.com/ramesh91720721/CICD_Q1.git',
                    branch: 'main',
                    credentialsId: 'github-creds'
            }
        }

        stage('Build') {
            steps {
                echo 'No build required for static HTML/CSS/JS'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying files...'
                sh 'mkdir -p /tmp/deploy && cp -r * /tmp/deploy'
            }
        }
    }
}
