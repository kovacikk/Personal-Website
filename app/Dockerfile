# pull official base image
FROM nikolaik/python-nodejs:python3.9-nodejs15-slim

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent

# install python dependencies
RUN pip install --upgrade pip
RUN pip install numpy

# add app
COPY . ./

# expose port
EXPOSE $PORT

# start app
CMD ["npm", "start"]