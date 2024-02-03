![dataset](https://github.com/iremblt/frontend/assets/85560757/43094ad8-1bad-4bd6-8fef-0d1b2bb2e9f8)![image](https://github.com/iremblt/frontend/assets/85560757/374d0543-d14f-49d9-8e26-d93666fcabd0)# What the missing ingredients frontend project 
Backend project link (https://github.com/iremblt/What-The-Missing-Ingredients-Backend-)

Abstract: In recent years, the use of machine learning and artificial intelligence has significantly increased and has been used in almost every sector. The use of these technologies on websites has also become widespread. The project presented in this thesis aims to develop a recipe recommendation system by utilizing a recommendation system. Using a machine learning-based recommendation system, it aims to recommend the most suitable recipes based on the ingredients entered by the users. To achieve this, a recipe website has been designed, and a recommendation system has been implemented on this website. The recommendation system was used as the distinguishing feature of this recipe site from other recipe sites.
Content-based recommendation system was employed. Cosine similarity was used to determine the similarity between user-entered ingredients and recipes. Natural Language Processing (NLP) techniques were employed to convert the entered ingredients into a language understandable by computers. Word Embeddings are used in NLP. Word2vec technique, one of the Word embedding techniques, was used. Backend codes were developed with Python. Flask is used for CRUD operations. MySQL is used as a database. The front end of the website was developed with the JavaScript framework Vue.

Sort of Research: The present study employs an applied research approach, aiming to address practical challenges and develop tangible solutions by leveraging existing knowledge and techniques. The research focuses on the development of a web-based system designed to offer recipe recommendations based on user-provided ingredients. Specifically, the project centers around the practical application of machine learning algorithms and recommendation systems to facilitate personalized recipe suggestions for users.
In this project, I conducted extensive research and applied various methods, primarily focusing on machine learning. As the project was based on machine learning, I thoroughly investigated the techniques relevant to this field. Additionally, I carefully selected a suitable dataset for the project and proceeded to clean and preprocess the data, making it ready for analysis. I developed a recommendation system based on this dataset, enabling personalized recipe recommendations for users. Subsequently, I created a web platform integrated with a user login system. Users could actively engage with the platform by leaving comments and providing ratings for recipes. This feedback mechanism allowed me to gather user opinions and improve the system accordingly.


Data Analysis: 
1) Find a Dataset: I wanted my dataset to be very large because I want to do a recipe suggestion algorithm, and this suggestion algorithm will search many different recipes from many datasets and present a suitable recipe suggestion.
I obtained a dataset from Kaggle called "Recipe Ingredients and Reviews".  This dataset consists of four separate datasets: clean_recipes, clean_reviews, recipes, and reviews. However, due to some inconsistencies found in the recipes and reviews datasets, I utilized the clean_recipes and clean_reviews CSV files. Additionally, as I intended to create a website with a user login system and the ability for users to create their recipes, a users.csv file was included. The clean_recipes dataset consists of ten columns including recipe name, review count, recipe photo, author, preparation time, cook time, total time, ingredients, directions, and recipe ID. It contains data as in the figure.
![image](https://github.com/iremblt/frontend/assets/85560757/e596b65c-883b-44a4-a181-18645248cb09)
The clean_reviews on the other hand, includes three columns: recipe ID, profile ID, and rating.
![image](https://github.com/iremblt/frontend/assets/85560757/056bcd72-45c5-436b-869d-94d2904c57ea)
The user's dataset contains ten columns: user ID, name, email, password, family size, educational qualifications, monthly income, occupation, marital status, gender, and age.
![image](https://github.com/iremblt/frontend/assets/85560757/9d079ab1-26c0-48c0-bc63-5025e285f16c)
2) Data Cleaning: The data cleaning step involves identifying and correcting missing or erroneous data. In this study, the "ingredients" field in the clean_recipes dataset underwent data cleaning. Since recipe suggestions are made based on ingredients, it was noticed that some recipes listed ingredients in duplicate. To eliminate these repeated ingredients and remove some common ingredients present in every recipe, data-cleaning steps were applied.
Firstly, a frequency analysis was performed to identify the most commonly used ingredients by examining the ingredients list of each recipe. Natural language processing (NLP) techniques were employed for this purpose. The most frequently used ingredients were identified and removed from the dataset. The top twenty frequently used ingredients are shown in the figure below.
![image](https://github.com/iremblt/frontend/assets/85560757/5ec35e48-9c68-45ae-a403-4d83e1f605bb)
During the cleaning process, it was also noticed that there were some punctuation marks present, which were subsequently removed. Lemmatization was employed to remove unnecessary suffixes and simplify the ingredients list.
3)Feature Extraction: The data was transformed and brought into the desired format. In this step, unnecessary columns were removed. In this step, it has been found that there are ten columns in the user's dataset, and "monthly income", "family size", and "educational qualification" is unnecessary and removed from these columns. Since the user's dataset was obtained from a different source, the profile IDs in the clean_reviews dataset were added in place of the user IDs. As a result, users now have their reviews and recipes associated with their profiles.
As I am providing a content-based recommendation system, the content of the data is crucial.  If the relevant recipe is to be offered to the user, it should be understood whether the ingredients of the recipe are suitable for that recipe. The recipe ingredient feature was extracted.
4) Similarity: Similarity calculations were performed using cosine similarity, and the top twenty recipes with the highest similarity scores were listed. The cosine of the angle between two vectors gives the cosine similarity result. Document similarity is checked to understand the similarities of the materials that I simplified while preprocessing the data. Cosine similarity allows us to find similarities without considering the document length. It determines whether two vectors are similar or not. 
5)Development: An environment in Google Collab was used to test the functioning of the recommendation system. Then, a schema for the website was designed and the development steps of the website were planned. There are multiple datasets on the website. Three different data sets, as seen in the figure, were prepared and an API was written for them. In addition, a separate service is provided for login and registration processes, and backend functions have been developed for basic CRUD (Create, Read, Update, Delete) operations of user, recipe, and score data. To ensure that modifications made in the CSV files did not affect the original dataset, the data was stored in a database using Flask. The MSSQL database contains the datasets in CSV format. MSSQL has datasets of CSV files. After preparing the backend, a frontend design was implemented to enhance the user experience and display recipe listings.

Findings: In this study, cosine similarity was used to measure the similarity between recipes and ingredients. The similarity between the ingredients entered by the users and the ingredients in the recipes was calculated. For example, some ingredients were entered for a recipe:
Ingredients entered: peach, brown sugar, cornstarch, vegetable oil, flour, white sugar, baking powder, lemon, egg, vanilla, vegetable oil, orange juice, milk.
The ingredients in the recipe are: peach, brown sugar, cornstarch, vegetable oil, flour, white sugar, baking powder, lemon, egg, vanilla, vegetable oil, orange juice
The only difference between these ingredients and the ingredients in the recipe is the presence of milk entered by the user. The similarity rates and the top five recommended ingredients obtained using the recommendation system are shown in Table 1. The similarity rate indicates how close a recipe is to the ingredients entered by the user, with a value close to 1 indicating high similarity and a value close to 0 indicating low similarity. In this example, a recipe with similar content is recommended as the first choice, with a similarity rate of 0. 999177873134613.  
![image](https://github.com/iremblt/frontend/assets/85560757/e8d98c35-eeef-40e1-9f46-92ba0cac6f49)

CSV Link
https://www.kaggle.com/datasets/kanaryayi/recipe-ingredients-and-reviews/code?select=clean_recipes.csv 
https://www.kaggle.com/datasets/anas123siddiqui/zomato-database?select=users.csv



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
