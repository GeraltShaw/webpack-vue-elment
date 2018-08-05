import Mock from 'mockjs';

Mock.mock(/\/getUserList.json/, {
  success: true,
  'data|30': [
    {
      'id|+1': 0,
      'key|+1': 0,
      name: '@name()',
      password: '@integer(10000, 100000)',
      address: '@county(true)',
      email: '@email()',
    }
  ]
});