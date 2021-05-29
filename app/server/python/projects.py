import sys
import os
import json
import datetime
import numpy as np
import init

basepath = os.path.dirname(__file__)

query = sys.argv[1].lower()

# Make sure Query isn't Null, if so send default
if (query == ""):
    defaultJson = init.getDefaultProjects()

    print(defaultJson)
    sys.stdout.flush()
    exit()

# Load Important Dictionaries
projectTfIdf, totalProjectDict, projectJson = init.getDict()

# Convert query string into vector
queryDict = {}
for token in query.split():
    queryDict[token] = 1

# Get Vector Form of Query
queryVector = init.getVectorFromDictionary(queryDict, totalProjectDict)

# Perform Cosine Simularity with Projects
simularityResults = {}
for projectKey in projectTfIdf.keys():
    cosineValue = np.dot(queryVector, projectTfIdf[projectKey]) / (np.linalg.norm(queryVector) * np.linalg.norm(projectTfIdf[projectKey]))
    
    if (cosineValue > 0):
        simularityResults[projectKey] = cosineValue

# Sort Results by Rating Value
simularityResults = (sorted(simularityResults.items(), key=lambda x: x[1], reverse=True))

# Create Json String of Filtered and Rated Projects
resultString = "[\n"
for i in range(len(simularityResults)):
    if (i == len(simularityResults) - 1):
        resultString = resultString + projectJson[simularityResults[i][0]] + "\n"
    else:
        resultString = resultString + projectJson[simularityResults[i][0]] + ",\n"
resultString = resultString + "\n]"

# Print Result Json to Server
print(resultString)

sys.stdout.flush()