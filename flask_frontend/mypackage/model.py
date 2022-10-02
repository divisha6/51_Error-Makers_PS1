import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import joblib
from sklearn import tree
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score

def job_predict(job):
    survey_data=pd.read_csv('survey.csv')
    survey_data

    X= survey_data.drop(columns=['jobs', 'submission_state', 'gender', 'age'])
    X
    y=survey_data['jobs']
    y
    from sklearn.tree import DecisionTreeClassifier

    model= DecisionTreeClassifier() 
    # training of the data
    model.fit(X,y)
    survey_data
    # predicting the results according to our dataset
    model.predict([ [7000, 15, 3], [5000, 12, 4]])

    X_train, X_test, y_train, y_test= train_test_split(X,y,test_size=0.2)
    model.fit(X_train, y_train)
    predictions=model.predict(X_test)

    score= accuracy_score(y_test, predictions)
    score   

    joblib.dump(model, 'job_recommender.joblib')

    model=joblib.load('job_recommender.joblib')
    predictions=model.predict([[7000, 15, 3]])
    predictions

    tree.export_graphviz(model, out_file='job_recommender.dot',
                    feature_names=['income', 'education', 'employment_status'],
                    class_names=sorted(y.unique()), 
                    label='all',
                    rounded=True,
                    filled=True)

    clf=LogisticRegression()
    clf.fit(X_train, y_train)

    predict= clf.predict(X_test)
    predict

    print(accuracy_score(y_test, predict))
    print(confusion_matrix(y_test, predict))
    print(classification_report(y_test, predict))

    return model.predict(X_test)[0]



