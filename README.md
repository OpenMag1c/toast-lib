# Tестовое задание библиотека Toast

## Содержание

Библиотека Javascript **awesome-toast-library**, для представления не блокирующих уведомлений, с возможностью настройки уведомлений.

#### Функционал:

- Показать уведомление.
- Возможность устанавливать положению уведомления.
- Возможность устанавливать тип уведомления (уведомления об успехе, ошибке, оповещение и т.д.).
- Возможность устанавливать длительность показа уведомления.
- Возможность задавать заголовок и описание уведомления.
- Возможность устанавливать отступы уведомления.
- Возможность изменять цвет типа уведомлений.
- Возможность изменять анимацию появления и исчезновения.

## Используемые технологии:

### Для react
- ***node.js*** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код).
- ***babel*** - транспайлер, преобразующий код из одного стандарта в другой.
- ***eslint*** - линтер для JavaScript кода.
- ***yarn*** - менеджер пакетов.
- ***rollup*** - сборщик ES-модулей.
- ***stortbook*** - инструмент, используемый для разработки компонентов пользовательского интерфейса в изоляции.
- ***react*** - JavaScript-библиотека для создания пользовательских интерфейсов.
- ***prop-types*** - набор валидаторов, которые могут быть использованы для проверки получаемых данных.
- ***styled-components*** - система стилизации react компонентов.
- ***cypress*** — e2e тестирование для веб приложений.

## Example of usage:

```javascript
const Example: = () => {
  const { info, warning, error, success } = useToastService(config);

  const warningClick = () => {
    warning("warning toast");
  };

  const infoClick = () => {
    info("info toast");
  };

  const errorClick = () => {
    error("error toast");
  };

  const successClick = () => {
    success("success toast");
  };

  return (
    <>
      <button type="button" onClick={infoClick}>
        Show info
      </button>
      <button type="button" onClick={warningClick}>
        Show warning
      </button>
      <button type="button" onClick={errorClick}>
        Show error
      </button>
      <button type="button" onClick={successClick}>
        Show success
      </button>
      <ToastContainer />
    </>
  );
};
```

## Configuration:

```javascript
export const yourConfig: IToastConfig = {
  duration: ToastDuration.Medium,
  position: ToastPosition.BottomRight,
  animation: ToastAnimation.Movement,
  margin: 10,
  infoStyle: {
    backgroundColor: "#8a2be2",
    font: "Segoe Ui",
    textColor: "black",
  } as IToastStyle,
  warningStyle: warningToastStyle,
  errorStyle: errorToastStyle,
  successStyle: successToastStyle,
};
```
