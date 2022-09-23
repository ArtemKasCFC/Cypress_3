pipeline {
    agent any

    tools{nodejs "node"}

    stages {
        stage('Cypress Test Suite') {
            steps {
                    git url : 'https://github.com/ArtemKasCFC/Cypress_guide.git'
                    bat 'npm install'
                    bat 'npm update'
                    bat 'npm run chrome'
                }
        }
    }
}