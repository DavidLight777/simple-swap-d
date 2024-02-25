// Основная функция интерполяции
function simpleSwap(template, data) {
    return template.replace(/\{(\w+)\}/g, (match, key) => {
      return data.hasOwnProperty(key) ? data[key] : match;
    });
  }
  
  // Экспорт функции для использования в других файлах
  module.exports = simpleSwap;
  