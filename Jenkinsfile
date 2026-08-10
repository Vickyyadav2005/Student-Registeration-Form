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
                test -f index.html && echo "Test 1: index.html - PASS"
                test -f style.css && echo "Test 2: style.css - PASS"
                test -f script.js && echo "Test 3: script.js - PASS"
                test -f student.js && echo "Test 4: student.js - PASS"
                test -f test.js && echo "Test 5: test.js - PASS"
                '''
            }
        }
    }

    post {

        success {
            echo 'Student Registration project built successfully.'
        }

        failure {
            echo 'Student Registration project build failed.'
        }

        always {
            echo 'Jenkins pipeline finished.'
        }
    }
}