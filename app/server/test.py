import sys;
import json;
import datetime;
import numpy as np;

with open('./json/projects.json') as file:
    data = json.load(file)
with open('./json/projects.json') as file:
    data = json.load(file)

exampleQuery = sys.argv[1].lower()

if (exampleQuery == ""):
    print(json.dumps(data))
    sys.stdout.flush()
    exit()


# Build Projects Indexing
projectDict = {}
projectDateDict = {}
totalProjectDict = {}
for project in data:

    projectDictInner = {}

    #Get Name Tokens
    for token in project["name"].split():
        token = token.lower()
        if (token in projectDictInner):
            projectDictInner[token] = projectDictInner[token] + 1
            totalProjectDict[token] = totalProjectDict[token] + 1
        else:
            projectDictInner[token] = 1
            totalProjectDict[token] = 1

    #Get Langauges Tokens
    for token in project["languages"]:
        token = token.lower()
        if (token in projectDictInner):
            projectDictInner[token] = projectDictInner[token] + 1
            totalProjectDict[token] = totalProjectDict[token] + 1
        else:
            projectDictInner[token] = 1
            totalProjectDict[token] = 1

    #Get Description Tokens
    for token in project["description"].split():
        token = token.lower()
        if (token in projectDictInner):
            projectDictInner[token] = projectDictInner[token] + 1
            totalProjectDict[token] = totalProjectDict[token] + 1
        else:
            projectDictInner[token] = 1
            totalProjectDict[token] = 1

    #Get Link Tokens
    for token in project["link"]:
        token = token.lower()
        if (token in projectDictInner):
            projectDictInner[token] = projectDictInner[token] + 1
            totalProjectDict[token] = totalProjectDict[token] + 1
        else:
            projectDictInner[token] = 1
            totalProjectDict[token] = 1

    projectDict[project["name"]] = projectDictInner
    projectDateDict[project["name"]] = datetime.datetime.strptime(project["date"], "%m/%d/%y")






# Converts From A Dictionary of Terms Number to A Np Array Vector
def getVectorFromDictionary(dictionary):
    vector = []
    for token in totalProjectDict:
        if token in dictionary:
            vector.append(dictionary[token])
        else:
            vector.append(0)

    return np.array(vector)

# Convert query string into vector
queryDict = {}
for token in exampleQuery.split():
    queryDict[token] = 1

queryVector = getVectorFromDictionary(queryDict)

#print(queryVector)

projectTfIdf = {}
for project in data:
    tf = getVectorFromDictionary(projectDict[project["name"]])
    df = getVectorFromDictionary(totalProjectDict)

    # tf * log (N / (df + 1))
    projectTfIdf[project["name"]] = tf * np.log(len(data)/(df + 1))


# Perform Cosine Simularity with Projects
simularityResults = {}
for project in data:
    cosineValue = np.dot(queryVector, projectTfIdf[project["name"]]) / (np.linalg.norm(queryVector) * np.linalg.norm(projectTfIdf[project["name"]]))
    
    if (cosineValue > 0):
        simularityResults[project["name"]] = cosineValue

simularityResults = (sorted(simularityResults.items(), key=lambda x: x[1], reverse=True))



projectJson = {}
for project in data:
    projectJson[project["name"]] = json.dumps(project)

resultString = "[\n"
for i in range(len(simularityResults)):
    if (i == len(simularityResults) - 1):
        resultString = resultString + projectJson[simularityResults[i][0]] + "\n"
    else:
        resultString = resultString + projectJson[simularityResults[i][0]] + ",\n"
resultString = resultString + "\n]"




print(resultString)

sys.stdout.flush()