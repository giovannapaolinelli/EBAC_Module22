FROM cypress/included:12.17.3

WORKDIR /home/cypress/

RUN apt-get update

COPY . /home/cypress/

VOLUME [ "/home/cypress/mochawesome-report" ]

RUN npm install

CMD ["npm", "run", "test"]
