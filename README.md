## Бонусная система на Laravel
### Пример ответа на GET /api/users

```json
[
  {
    "id": 1,
    "name": "Alexey Mokeev",
    "email": "ul.alexey.mokeev@gmail.com",
    "phone": null,
    "created_at": "2025-05-05T16:09:39.000000Z",
    "updated_at": "2025-05-05T16:09:39.000000Z"
  },
  {
    "id": 2,
    "name": "Chichkin Anton",
    "email": "chichkin2003@bk.ru",
    "phone": null,
    "created_at": "2025-05-05T16:11:37.000000Z",
    "updated_at": "2025-05-05T16:11:37.000000Z"
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
    "created_at": "2025-05-05T16:09:39.000000Z",
    "updated_at": "2025-05-05T16:09:39.000000Z",
    "user": {
      "id": 1,
      "name": "Alexey Mokeev",
      "email": "ul.alexey.mokeev@gmail.com",
      "phone": null,
      "created_at": "2025-05-05T16:09:39.000000Z",
      "updated_at": "2025-05-05T16:09:39.000000Z"
    }
  },
  {
    "id": 2,
    "user_id": 2,
    "balance": "0.00",
    "blocked": false,
    "created_at": "2025-05-05T16:11:37.000000Z",
    "updated_at": "2025-05-05T16:11:37.000000Z",
    "user": {
      "id": 2,
      "name": "Chichkin Anton",
      "email": "chichkin2003@bk.ru",
      "phone": null,
      "created_at": "2025-05-05T16:11:37.000000Z",
      "updated_at": "2025-05-05T16:11:37.000000Z"
    }
  }
]
```
