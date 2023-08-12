FROM cypress/included:12.17.3

WORKDIR /home/cypress/

COPY . /home/cypress/

RUN npm install

CMD ["npx", "cypress", "run"]
