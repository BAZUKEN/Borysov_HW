1. Создал проект
2. Создал компоненты
    BookListComponent           - ng g c BookListComponent 
    BookComponent               - ng g c BookComponent -t  (html in ts)
    CartComponent               - ng g c CartComponent -s  (css i ts)
    CartItemComponent           - ng g c CartItemComponent --styletext
    ProcessOrderFormComponent   - ng g c ProcessOrderFormComponent -p
    OneMoreComponent            - ng g c test/OneMoreComponent 
3. Директивы
    ng g d directives/extIt
    ng g d directives/extOn --spec false --flat -m app
4. Сервисы
    ng g s services/servIt-1
5. Пайпы 
    ng g p pipes/goToItNow
6. Создать guard
    ng g g guard/stopServ