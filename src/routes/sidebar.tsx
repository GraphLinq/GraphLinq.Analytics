/**
 * These are used to render the Sidebar
 * You can include any link here, local or external.
 *
 * Actual Router routes, go to `routes/index.tsx`
 */
const routes = [
  {
    path: '/analytics/graphlinq', // the url
    imgSrc: '/template/img/graphlinq.svg', // Project Icon
    name: 'GraphLinq', // name displayed in Sidebar
  },
  {
    path: '/analytics/unicrypt',
    imgSrc: '/template/img/unicrypt.svg',
    name: 'Unicrypt',
  },
  {
    path: '/analytics/polygon',
    imgSrc: '/template/img/polygon-small.svg',
    name: 'Polygon',
  },
]

export default routes
