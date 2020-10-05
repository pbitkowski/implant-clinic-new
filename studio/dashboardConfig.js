export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7af9def5a6e5a5e1041f20',
                  title: 'Sanity Studio',
                  name: 'implant-clinic-new-studio',
                  apiId: '6056c303-841e-4576-837a-f64330b9d1be'
                },
                {
                  buildHookId: '5f7af9def5a6e5a932041c23',
                  title: 'Landing pages Website',
                  name: 'implant-clinic-new',
                  apiId: '4dcd8d19-5acf-4c52-8630-27f90bf98b38'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pbitkowski/implant-clinic-new',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://implant-clinic-new.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
