## Бонусная система на Laravel
### Пример ответа на GET /api/users

```json
[
    {
        "id": 1,
        "name": "Чичкин Антон",
        "email": "chichkin2003@bk.ru",
        "phone": "88005553535",
        "tg": "@Anton12357",
        "created_at": "2025-05-05T19:04:59.000000Z",
        "updated_at": "2025-05-05T19:15:13.000000Z"
    },
    {
        "id": 2,
        "name": "Мокеев Алексей",
        "email": "ul.alexey.mokeev@gmail.com",
        "phone": "79969538332",
        "tg": "@lesh_4",
        "created_at": "2025-05-05T19:16:08.000000Z",
        "updated_at": "2025-05-05T19:17:01.000000Z"
    }
]
```

### Пример ответа на GET /api/bonus_balances

```json
[
    {
        "id": 1,
        "user_id": 1,
        "balance": "0.00",
        "blocked": false,
        "created_at": "2025-05-05T19:04:59.000000Z",
        "updated_at": "2025-05-05T19:04:59.000000Z",
        "user": {
            "id": 1,
            "name": "Чичкин Антон",
            "email": "chichkin2003@bk.ru",
            "phone": "88005553535",
            "tg": "@Anton12357",
            "created_at": "2025-05-05T19:04:59.000000Z",
            "updated_at": "2025-05-05T19:15:13.000000Z"
        }
    },
    {
        "id": 2,
        "user_id": 2,
        "balance": "0.00",
        "blocked": false,
        "created_at": "2025-05-05T19:16:08.000000Z",
        "updated_at": "2025-05-05T19:16:08.000000Z",
        "user": {
            "id": 2,
            "name": "Мокеев Алексей",
            "email": "ul.alexey.mokeev@gmail.com",
            "phone": "79969538332",
            "tg": "@lesh_4",
            "created_at": "2025-05-05T19:16:08.000000Z",
            "updated_at": "2025-05-05T19:17:01.000000Z"
        }
    }
]
```
### Пример ответа на GET /api/bonus_balances

```json
[
    {
        "id": 1,
        "code": "purchase_bonus",
        "name": "Бонус за покупку",
        "auto": true,
        "created_at": "2025-05-05T19:57:59.000000Z",
        "updated_at": "2025-05-05T19:57:59.000000Z"
    },
    {
        "id": 2,
        "code": "welcome_bonus",
        "name": "Приветственные бонусы",
        "auto": true,
        "created_at": "2025-05-05T20:00:05.000000Z",
        "updated_at": "2025-05-05T20:00:05.000000Z"
    },
    {
        "id": 3,
        "code": "activity_bonus",
        "name": "Бонус за активность",
        "auto": true,
        "created_at": "2025-05-05T20:00:35.000000Z",
        "updated_at": "2025-05-05T20:00:35.000000Z"
    },
    {
        "id": 4,
        "code": "holiday_bonus",
        "name": "Праздничные бонусы",
        "auto": true,
        "created_at": "2025-05-05T20:00:48.000000Z",
        "updated_at": "2025-05-05T20:00:48.000000Z"
    },
    {
        "id": 5,
        "code": "manual_adjustment",
        "name": "Ручное начисление",
        "auto": false,
        "created_at": "2025-05-05T20:00:57.000000Z",
        "updated_at": "2025-05-05T20:00:57.000000Z"
    },
    {
        "id": 6,
        "code": "manual_spend",
        "name": "Ручное списание",
        "auto": false,
        "created_at": "2025-05-05T20:01:06.000000Z",
        "updated_at": "2025-05-05T20:01:06.000000Z"
    }
]
```
