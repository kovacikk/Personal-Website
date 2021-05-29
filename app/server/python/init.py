# init.py
# Checks if project data has been indexed
# If not, indexes and saves to save time later

import sys
import os
import json
import datetime
import numpy as np
import pickle

basepath = os.path.dirname(__file__)

# Returns Projects TfIdf and Date Dictionary
def getDict():

    # Return TfIdf Dict and Date if pickle file exists
    if os.path.isfile('./projectsDict.pickle'):
        with open(os.path.join(basepath, './projectsDict.pickle'), 'rb') as file:
            projectsDict = pickle.load(file)
            return projectsDict
    # Pickle file does not exist create them
    else:
        projectsDict = calculateTfIdf()
        with open(os.path.join(basepath, './projectsDict.pickle'), 'wb') as file:
            pickle.dump(projectsDict, file, protocol=pickle.HIGHEST_PROTOCOL)
        return projectsDict


# Creates TfIdf and Date Dictionary
def calculateTfIdf():
    with open(os.path.join(basepath, '../json/projects.json')) as file:
        data = json.load(file)

    projectJson = getProjectJson(data)
    projectDict, totalProjectDict = getFrequency(data)
    df = getVectorFromDictionary(totalProjectDict, totalProjectDict)

    projectTfIdf = {}
    for project in data:
        tf = getVectorFromDictionary(projectDict[project["name"]], totalProjectDict)

        # tf * log (N / (df + 1))
        projectTfIdf[project["name"]] = tf * np.log(len(data)/(df + 1))

    return (projectTfIdf, totalProjectDict, projectJson)


# Builds Term and Document Frequency
def getFrequency(data):
    projectDict = {}
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

    return projectDict, totalProjectDict


# Converts From A Dictionary of Terms Number to A Np Array Vector
def getVectorFromDictionary(dictionary, totalProjectDict):
    vector = []
    for token in totalProjectDict:
        if token in dictionary:
            vector.append(dictionary[token])
        else:
            vector.append(0)

    return np.array(vector)


# Builds a Dictionary for String Dumps of the Json File
def getProjectJson(data):
    projectJson = {}
    for project in data:
        projectJson[project["name"]] = json.dumps(project)

    return projectJson


# Loads Default Date Sorted Projects List
def getDefaultProjects():
    # Return Projects if pickle file exists
    if os.path.isfile('./projectsDefault.pickle'):
        with open(os.path.join(basepath, './projectsDefault.pickle'), 'rb') as file:
            projectsDefault = pickle.load(file)
            return projectsDefault
    # Pickle file does not exist create it
    else:
        projectsDefault = getProjectsDefault()
        with open(os.path.join(basepath, './projectsDefault.pickle'), 'wb') as file:
            pickle.dump(projectsDefault, file, protocol=pickle.HIGHEST_PROTOCOL)
        return projectsDefault


def getProjectsDefault():
    with open(os.path.join(basepath, '../json/projects.json')) as file:
        data = json.load(file)

    # Get Project Dates
    projectDateDict = {}
    for project in data:
        projectDateDict[project["name"]] = datetime.datetime.strptime(project["date"], "%m/%d/%y")

    # Sort Project Dates
    projectDateDict = (sorted(projectDateDict.items(), key=lambda x: x[1], reverse=True))

    projectJson = getProjectJson(data)

    # Create Json String of Sorted Projects
    resultString = "[\n"
    for i in range(len(projectDateDict)):
        if (i == len(projectDateDict) - 1):
            resultString = resultString + projectJson[projectDateDict[i][0]] + "\n"
        else:
            resultString = resultString + projectJson[projectDateDict[i][0]] + ",\n"
    resultString = resultString + "\n]"

    return resultString