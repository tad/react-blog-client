// TEMPORARY MODULE TO SIMULATE DYNAMIC Content

let blogMeta = {
    blogTitle: 'My React Redux Blog',
    blogDescription: 'My React Redux Blog',
    mastheadLinks: [
      {
        link: '#',
        title: 'Home',
        default: true
      },
      {
        link: '#/categories',
        title: 'Categories',
        default: false
      },
      {
        link: '#/bookstore',
        title: 'Book Store',
        default: false
      },
      {
        link: '#/links',
        title: 'Links',
        default: false
      },
      {
        link: '#/about',
        title: 'About Me',
        default: false
      }
    ]
};

// Placeholder for now until we begin reading in from external service
export default blogMeta;
