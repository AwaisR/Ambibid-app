import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import { Route, withRouter } from 'react-router-dom';
const Home = lazy(() => import('pages/Signin/index'));
const About = lazy(() => import('pages/about/About'));
const Contact = lazy(() => import('pages/contact/Contact'));
const ForgetPassword = lazy(() => import('pages/Signin/ForgetPassword'));
const UserAccount = lazy(() => import('pages/Account/index.js'));
const SellarAccount = lazy(() => import('pages/SellerAccount/index.js'));
const HomePage = lazy(() => import('pages/homepage/index.js'));
const CurrentItemDetails = lazy(() => import('pages/ItemsDetails/index.js'));
const Catagories = lazy(() => import('pages/catagories/index.js'));
const CatagoriesDetails = lazy(() => import('pages/catagories/CatagoriesDetails.js'));
const SellarDashboard = lazy(() => import('pages/SellarDashBoard/index.js'));
const MyAccount = lazy(() => import('pages/myAccount/index.js'));
const SunmitDisputes = lazy(() =>
  import('pages/myAccount/Disputes/SunmitDisputes/SunmitDisputes.js'),
);
const PayItems = lazy(() => import('pages/myAccount/PayItems/index.js'));
const paymentMethod = lazy(() => import('pages/itemSell/paymentMethod.js'));
const sellingItem = lazy(() => import('pages/itemSell/sellingItem.js'));
const ListItems = lazy(() => import('pages/Listitems/index.js'));
const ThankSubmit = lazy(() => import('pages/Listitems/ThanksPage/ThankSubmit.js'));
const ThnksReviewPage = lazy(() =>
  import('pages/myAccount/PurchaseHistory/ThnksReviewPage/ThankSubmit.js'),
);
const SupporCenter = lazy(() => import('pages/SupportCenter/index.js'));
const BuyItems = lazy(() => import('pages/SupportCenter/BuyItems.js'));
const TermsConditions = lazy(() => import('pages/TermsCondition/index.js'));

const ContactForm = lazy(() => import('pages/SupportCenter/ContactForm.js'));
const PaymentSuccess = lazy(() => import('pages/myAccount/PayItems/PaymentSuccess.js'));
const SellerLogin = lazy(() => import('pages/Account/SellerLogin.js'));
const AdminDetalis = lazy(() => import('pages/AdminPanel/AdminDetails/index.js'));
const AdminLogin = lazy(() => import('pages/AdminPanel/index.js'));
import { BlockLoading } from 'react-loadingg';

const routes = [
  {
    exact: true,
    path: '/thanks-submit-items',
    component: ThankSubmit,
  },

  // {
  //   path: '/forget-password',
  //   component: ForgetPassword,
  // },
  {
    path: '/user-account',
    component: UserAccount,
  },
  {
    path: '/seller-account',
    component: SellarAccount,
  },
  {
    path: '/items/:id/auction',
    component: CurrentItemDetails,
  },
  {
    path: '/items/:id/recommended',
    component: CurrentItemDetails,
  },
  {
    path: '/items/:id/buyer',
    component: CurrentItemDetails,
  },
  {
    path: '/catagoriesDetails/:id',
    component: CatagoriesDetails,
  },

  {
    path: '/sellar-dashboard',
    component: SellarDashboard,
  },
  {
    path: '/my-account',
    component: MyAccount,
  },
  {
    path: '/sell-items',
    component: paymentMethod,
  },
  {
    path: '/selling-item',
    component: sellingItem,
  },

  {
    path: '/List-items',
    component: ListItems,
  },
  {
    path: '/pay-items/:id',
    component: PayItems,
  },
  {
    path: '/buy-items',
    component: BuyItems,
  },

  {
    path: '/payment-success',
    component: PaymentSuccess,
  },
  {
    path: '/seller-login',
    component: SellerLogin,
  },
  {
    exact: true,
    path: '/thnks-reviews',
    component: ThnksReviewPage,
  },
  {
    exact: true,
    path: '/Submited-disputes',
    component: SunmitDisputes,
  },

  // {
  //   exact: true,
  //   path: '/admin-details',
  //   component: AdminDetalis,
  // },
];

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Suspense
          fallback={
            <div className="lazy-loading">
              <BlockLoading speed="22" size="large" color="#14213D">
                fg
              </BlockLoading>
            </div>
          }
        >
          <Route path="/" component={Home} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/admin-login" component={AdminLogin} />
          <Route path="/admin-details" component={AdminDetalis} />
          <Route path="/forget-password" component={ForgetPassword} />
          <Route path="/catagories" component={Catagories} />
          <Route path="/support-center" component={SupporCenter} />
          <Route path="/contact-us" component={ContactForm} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/terms-conditions" component={TermsConditions} />
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
