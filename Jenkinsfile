pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Getting the latest project files...'
                checkout scm
            }
        }

        stage('Check Files') {
            steps {
                sh '''
                test -f index.html
                test -f style.css
                test -f script.js
                test -f student.js
                test -f student.json
                test -f test.js
                test -f Jenkinsfile
                echo "All required project files are available."
                '''
            }
        }

        stage('Check JavaScript') {
            steps {
                sh '''
                node --check script.js
                node --check student.js
                node --check test.js
                echo "JavaScript files checked successfully."
                '''
            }
        }

        stage('Validate HTML') {
            steps {
                sh '''
                grep -q 'id="name"' index.html
                grep -q 'id="email"' index.html
                grep -q 'id="mobile"' index.html
                grep -q 'id="branch"' index.html
                grep -q 'id="password"' index.html
                echo "HTML validation completed successfully."
                '''
            }
        }

        stage('Run Tests') {
            steps {
                sh '''
                node test.js
                '''
            }
        }
    }

    post {
        always {
            echo 'Jenkins pipeline finished.'
        }

        success {
            echo 'Student Registration project built successfully.'
        }

        failure {
            echo 'Student Registration project build failed.'
        }
    }
}