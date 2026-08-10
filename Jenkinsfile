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
                bat '''
                if not exist index.html exit /b 1
                if not exist style.css exit /b 1
                if not exist script.js exit /b 1
                if not exist student.js exit /b 1
                if not exist test.js exit /b 1

                echo All required project files are available.
                '''
            }
        }

        stage('Check JavaScript') {
            steps {
                bat '''
                node --check script.js
                if errorlevel 1 exit /b 1

                node --check student.js
                if errorlevel 1 exit /b 1

                node --check test.js
                if errorlevel 1 exit /b 1

                echo JavaScript files checked successfully.
                '''
            }
        }

        stage('Validate HTML') {
            steps {
                bat '''
                findstr /C:"id="name"" index.html >nul
                if errorlevel 1 exit /b 1

                findstr /C:"id="email"" index.html >nul
                if errorlevel 1 exit /b 1

                findstr /C:"id="mobile"" index.html >nul
                if errorlevel 1 exit /b 1

                findstr /C:"id="branch"" index.html >nul
                if errorlevel 1 exit /b 1

                findstr /C:"id="password"" index.html >nul
                if errorlevel 1 exit /b 1

                echo HTML validation completed successfully.
                '''
            }
        }

        stage('Run Tests') {
            steps {
                bat '''
                node -e "const fs=require('fs'); if(!fs.existsSync('index.html')) process.exit(1); console.log('Test 1: index.html - PASS')"
                node -e "const fs=require('fs'); if(!fs.existsSync('style.css')) process.exit(1); console.log('Test 2: style.css - PASS')"
                node -e "const fs=require('fs'); if(!fs.existsSync('script.js')) process.exit(1); console.log('Test 3: script.js - PASS')"
                node -e "const fs=require('fs'); if(!fs.existsSync('student.js')) process.exit(1); console.log('Test 4: student.js - PASS')"
                node -e "const fs=require('fs'); if(!fs.existsSync('test.js')) process.exit(1); console.log('Test 5: test.js - PASS')"
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