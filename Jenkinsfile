pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
                sh '/usr/bin/docker --version '
            }
        }
        stage('automate') {
//             steps {
//                 echo 'this is for automate'
//                 sh 'docker build -t yourusername-dockerhub/yourappname:vtag . '
//                 sh 'docker login -u $USERNAME -p $PASSWORD '
//                 sh 'docker push yourusername-dockerhub/yourappname:vtag '
//             }
            steps{
withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
    echo 'this is for automate'
    echo $USERNAME
//                 sh 'docker build -t viraj116/pipeline116:1.0 . '
//                 sh 'docker login -u $USERNAME -p $PASSWORD '
//                 sh 'docker push viraj116/pipeline116:1.0 '
}
            }
        }
        
    }
}
