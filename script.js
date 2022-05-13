let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
    ];
    // Варианты цен (фильтры), которые ищет пользователь
    let requiredRange1= [null, 200];
    let requiredRange2 = [100, 350];
    let requiredRange3 = [200, null];
    let filtred_range=[];
    
    function range(cours,cours_range){ // создаем функцию с двумя переменными на входе
        let cour_req=[]; // массив в который будем добавлять курсы удовлетворяющие условию
        for (let i = 0; i < 8; i++) { // заменяем через цикл все NULL в курсах на числовые значения для корректного сравнивания диапазонов
            if (cours[i].prices[0]==null){
                cours[i].prices[0]=0;
            }
           if (cours[i].prices[1]==null){
                cours[i].prices[1]=1000;
            }
        }
        if (cours_range[0]==null){
              cours_range[0]=0;
        } // заменяем все NULL в диапазонах поисках для корректного сравнивания
        if (cours_range[1]==null){
              cours_range[1]=1000;
        }// заменяем все NULL в диапазонах поисках для корректного сравнива
        for (let i = 0; i < courses.length; i++) { // цикл для прохождения сравнивания по всем элементам массива с курсами
            if (cours_range[0]>=cours[i].prices[0] && cours_range[0]<=cours[i].prices[1] || cours_range[1]>=cours[i].prices[0] && cours_range[1]<=cours[i].prices[1] ){ // условие для того, чтоб одна из границ искомого диапазона лежала в диапазоне цен на опеределенный курс
                cour_req.push(cours[i]) // добавляем этот курс в массив
            }
        }
        return(cour_req) // возвращаем его
    }
    filtred_range1=range(courses,requiredRange1);
    filtred_range2=range(courses,requiredRange2);
    filtred_range3=range(courses,requiredRange3);
    
    function bubbleSort(sort_list){
      let steps = sort_list.length - 1; // шаг на один меньше чем длина, так как на предпоследнем шагу поменяв местами последние элементы, наибольший встанет в конец
      let swapped; // индикатор перестановки
      do { // цикл для прохождения по всему списку сравнивая каждый элемент, пока индикатор TRUE(хотя бы один раз)
        swapped = false;
        for (let i = 0; i < steps; i += 1) {     // Перебираем массив и меняем местами элементы, если предыдущий больше, чем следующий
          if (sort_list[i].prices[0] > sort_list[i + 1].prices[0]) {
            // temp – временная константа для хранения текущего элемента
            const temp = sort_list[i];
            sort_list[i] = sort_list[i + 1];
            sort_list[i + 1] = temp;
            // Если сработал if и была совершена перестановка,
            // присваиваем swapped значение true
            swapped = true;
          }
        }
      } while (swapped); // продолжаем, пока swapped === true
    
      return sort_list;
    };
    
    console.log(bubbleSort(filtred_range1))
    console.log(bubbleSort(filtred_range2))
    console.log(bubbleSort(filtred_range3))