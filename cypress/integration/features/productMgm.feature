Feature: Eliminación de Producto y Verificación

    Background:
        Given el usuario se encuentra en la pagina de pushingIt

    Scenario: Agrega un producto luego lo elimina y verifica que no exista
        And el usuario esta logueado
        And se dirige a Online shop
        And agrega un producto nuevo
        When busca el producto creado recientemente
        And elimina el producto recien creado
        And vuelve a buscar el producto eliminado
        Then verifica que el producto fue eliminado exitosamente