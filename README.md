# Food Planner

To repozytorium jest poświęcone projektowi Food planner w wersji Reactowej.

## Technologie i API

- [ pexels api ](https://www.pexels.com/pl-pl/api/documentation/?language=javascript#photos)
- styled components
- redux toolkit
- hooks
- react router dom
- react-transition-group
- typescript

## Jak zacząć?

Aby rozpocząć pracę nad projektem, należy:

- `clone` - sklonować to repozytorium
- `npm install` - zainstalować wszystkie niezbędne zależności

Projekt jest oparty o konfigurację _Create React App_.

## Development i Budowanie

Aby uruchomić serwer deweloperski przy pracy nad projektem, trzeba uruchomić komendę `npm start`.

Budowanie projektu to komenda `npm run build`. Z tej komendy korzystamy tylko wtedy kiedy chcemy wygenerować folder `build` ze skompilowaną i produkcyjną wersją naszej aplikacji.

## REST API

W ramach projektu ScrumLab przygotowano podstawową strukturę bazy danych `json-server`. Plik zawierający wszystkie dane znajduje się w folderze `database` pod nazwą `db.json`.

Uruchamiamy serwer za pomocą `npm run api` w osobnej karcie terminala. Serwer powinien zostać uruchomiony na porcie `3001`: http://localhost:3001.

### Screenshots

![home page](images/HomePage.png 'Home page')

![dashboard](images/DashboardMain.png 'Dashboard')

![recipes list](images/RecipesList.png 'Recipes list')

![add recipe](images/AddRecipe.png 'Add recipe')

![add schedule](images/AddSchedule.png 'Add schedule')
