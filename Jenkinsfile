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
                /opt/homebrew/bin/node --check script.js
                /opt/homebrew/bin/node --check student.js
                /opt/homebrew/bin/node --check test.js
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
                /opt/homebrew/bin/node test.js
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

        withCredentials([string(credentialsId: 'github-token', variable: 'GITHUB_TOKEN')]) {
            sh '''
            curl -L \
              -X POST \
              -H "Accept: application/vnd.github+json" \
              -H "Authorization: Bearer $GITHUB_TOKEN" \
              -H "X-GitHub-Api-Version: 2022-11-28" \
              https://api.github.com/repos/Vickyyadav2005/Student-Registeration-Form/statuses/$GIT_COMMIT \
              -d '{"state":"success","description":"All 10 test cases passed","context":"Jenkins"}'
            '''
        }
    }

    failure {
        echo 'Student Registration project build failed.'

        withCredentials([string(credentialsId: 'github-token', variable: 'GITHUB_TOKEN')]) {
            sh '''
            curl -L \
              -X POST \
              -H "Accept: application/vnd.github+json" \
              -H "Authorization: Bearer $GITHUB_TOKEN" \
              -H "X-GitHub-Api-Version: 2022-11-28" \
              https://api.github.com/repos/Vickyyadav2005/Student-Registeration-Form/statuses/$GIT_COMMIT \
              -d '{"state":"failure","description":"One or more test cases failed","context":"Jenkins"}'
            '''
        }
    }
}
}