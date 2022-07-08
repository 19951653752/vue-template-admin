import Layout from '@/layout'
export default [
  {
    url: '/kgd-web/user/session',
    type: 'get',
    response: config => {
      return {
        code: '200',
        message: 'success',
        data: {
          userId: config.query.username,
          token: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiLlu5bmuK8iLCJleHAiOjE2NTU3ODAxNzcsIm9yZyI6IjUzNCIsInVzZXJ'
        }
      }
    }
  },
  // 注册
  {
    url: '/kgd-web/register/register',
    type: 'post',
    response: config => {
      return {
        code: '200',
        message: 'success',
        data: {
          message: '注册成功'
        }
      }
    }
  },
  // 获取所有专业
  {
    url: '/kgd-web/register/majorList',
    type: 'get',
    response: config => {
      return {
        code: '200',
        message: 'success',
        data: {
          list: majorList
        }
      }
    }
  },
  // 获取该专业所有班级
  {
    url: '/kgd-web/register/classList',
    type: 'get',
    response: config => {
      return {
        code: '200',
        message: 'success',
        data: {
          list: classList
        }
      }
    }
  },
  // 获取所有岗位
  {
    url: '/kgd-web/register/stationList',
    type: 'get',
    response: config => {
      return {
        code: '200',
        message: 'success',
        data: {
          list: stationList
        }
      }
    }
  },
  // 获取登录用户信息
  {
    url: '/kgd-web/user/loginInfo',
    type: 'get',
    response: config => {
      console.log(config)
      const { userId } = config.query
      // 网控
      if (userId === '1') {
        return {
          code: '200',
          data: {
            username: '张三',
            menu: [
              {
                path: '/',
                component: 'layout',
                redirect: '/dashboard',
                children: [
                  {
                    path: 'dashboard',
                    component: 'dashboard/index',
                    name: 'Dashboard',
                    meta: { title: 'Dashboard', icon: 'command' }
                  },
                ]
              },
              {
                path: '/networkControl',
                component: 'layout',
                redirect: '/networkControl/list',
                children: [
                  {
                    path: 'list',
                    component: 'networkControl',
                    name: 'NetworkControl',
                    meta: { title: '网控', icon: 'command' },
                  },
                ]
              },
            ],
            message: '获取成功'
          }
        }
      }
      // 指挥席
      if (userId === '2') {
        return {
          code: '200',
          data: {
            username: '张三',
            menu: [
              {
                path: '/',
                component: 'layout',
                redirect: '/command',
                children: [
                  {
                    path: 'command',
                    component: 'command',
                    name: 'Command',
                    meta: { title: '指挥席', icon: 'command' },
                  },
                ]
              }
            ],
            message: '获取成功'
          }
        }
      }
      // 卫星通信车
      if (userId === '3') {
        return {
          code: '200',
          data: {
            username: '张三',
            menu: [
              {
                path: '/',
                component: 'layout',
                redirect: '/satellite',
                children: [
                  {
                    path: 'satellite',
                    component: 'satellite',
                    name: 'Satellite',
                    meta: { title: '指挥席', icon: 'command' },
                  }
                ]
              }
            ],
            message: '获取成功'
          }
        }
      }
      // 学员
      if (userId === '4') {
        return {
          code: '200',
          data: {
            username: '张三',
            menu: [
              {
                path: '/',
                component: 'layout',
                redirect: '/Home',
                children: [
                  {
                    path: 'Home',
                    component: 'Home',
                    name: 'Home',
                    meta: { title: '首页', icon: 'command' }
                  },
                ]
              },
              {
                path: '/Many',
                component: 'layout',
                redirect: '/Many/index',
                children: [
                  {
                    path: 'index',
                    component: 'Many',
                    name: 'Many',
                    meta: { title: '多人视频', icon: 'command' },
                  },
                ]
              },
              {
                path: '/Springonelist',
                component: 'layout',
                redirect: '/Springonelist/index',
                children: [
                  {
                    path: 'index',
                    component: 'Musictroupe/Happyhave/Springone/Springonelist',
                    name: 'Springonelist',
                    meta: { title: '百度地图组件', icon: 'command' },
                  },
                ]
              },
              {
                path: '/routelist',
                component: 'layout',
                redirect: '/routelist/index',
                children: [
                  {
                    path: 'index',
                    component: 'Musictroupe/Happyhave/Springone/routelist',
                    name: 'routelist',
                    meta: { title: '百度地图组件路线', icon: 'command' },
                  },
                ]
              },
              // {
              //   path: '/',
              //   name: 'Home',
              //   label: '首页',
              //   id: '1',
              //   icon: 'el-iconkongzhimianban-01',
              //   isShow: '1',
              //   url: 'Home/Home'
              // },
              // {
              //   path: '/many',
              //   name: 'many',
              //   id: '2',
              //   label: '多人视频',
              //   icon: 'setting',
              //   isShow: '1',
              //   url: 'Many/many'
              // },
              // {
              //   label: '弹框',
              //   name: '弹框',
              //   id: '3',
              //   icon: 'location',
              //   children: [
              //     {
              //       path: '/Welfaretoday',
              //       name: 'Welfaretoday',
              //       label: '弹框组件',
              //       id: '32',
              //       icon: 'setting',
              //       isShow: '1',
              //       url: 'Musictroupe/Happyhave/Welfaretoday'
              //     },
              //     {
              //       label: '百度地图',
              //       name: '百度地图',
              //       icon: 'location',
              //       id: '33',
              //       children: [
              //         {
              //           path: '/Springonelist',
              //           name: 'Springonelist',
              //           id: '331',
              //           label: '百度地图组件',
              //           icon: 'setting',
              //           isShow: '1',
              //           url: 'Musictroupe/Happyhave/Springone/Springonelist'
              //         },
              //         {
              //           path: '/routelist',
              //           name: 'routelist',
              //           id: '332',
              //           label: '百度地图组件路线',
              //           icon: 'setting',
              //           isShow: '1',
              //           url: 'Musictroupe/Happyhave/Springone/routelist'
              //         },
              //       ]
              //     }
              //   ]
              // }
            ],
            message: '获取成功'
          }
        }
      }
      // 超管
      if (userId === '5') {
        return {
          code: '200',
          data: {
            username: '张三',
            menu: [
              {
                path: '/',
                component: 'layout',
                redirect: '/effectAssess',
                children: [
                  {
                    path: 'effectAssess',
                    component: 'admin/effectAssess',
                    name: 'EffectAssess',
                    meta: { title: '效能评估', icon: 'command' }
                  },
                ]
              },
              {
                path: '/userManage',
                component: 'layout',
                redirect: '/userManage/index',
                children: [
                  {
                    path: 'index',
                    component: 'admin/userManage',
                    name: 'UserManage',
                    meta: { title: '用户管理', icon: 'command' },
                  }
                ]
              },
              {
                path: '/trainManage',
                component: 'layout',
                redirect: '/trainManage/index',
                children: [
                  {
                    path: 'index',
                    component: 'admin/trainManage',
                    name: 'TrainManage',
                    meta: { title: '训练管理', icon: 'command' },
                  }
                ]
              },
              {
                path: '/docIssue',
                component: 'layout',
                redirect: '/docIssue/index',
                children: [
                  {
                    path: 'index',
                    component: 'admin/docIssue',
                    name: 'DocIssue',
                    meta: { title: '文书下发', icon: 'command' },
                  }
                ]
              },
            ],
            message: '获取成功'
          }
        }
      }
      return {
        code: '400',
        message: 'error',
        data: {
          message: '用户名或密码错误'
        }
      }
    }
  }
]

const majorList = [
  {
    code: '1001',
    name: '软件工程'
  },
  {
    code: '1002',
    name: '人工智能'
  },
  {
    code: '1003',
    name: '航天器制造'
  }
]
const classList = []
for (let i = 1; i < 5; i++) {
  classList.push({
    code: '1001' + i,
    name: '软件工程' + i + '班',
  })
}
const stationList = [
  {
    code: '1001',
    name: '网控'
  },
  {
    code: '1002',
    name: '指挥席'
  },
  {
    code: '1003',
    name: '卫星通信车'
  },
  {
    code: '1004',
    name: '学员'
  },
]
