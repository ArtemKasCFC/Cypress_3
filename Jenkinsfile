pipeline {
    agent any

    tools{nodejs "node"}

    stages {
        stage('Cypress Tests') {
            steps {
                    git branch: 'main', url: "https://github.com/ArtemKasCFC/Cypress_guide.git"
                    bat 'npm install'
                    bat 'npm run %Script%'
                }
        }
    }
}