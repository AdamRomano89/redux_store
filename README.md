#### Redux Store
A full-stack Redux store using the following technologies:

#### Built With 🧰
- Node.js
- MongoDB
- GraphQl Server
- React / Apollo Client/ Redux

## Link To Live Deployment 
https://reduxstorefullstack.herokuapp.com/

#### To use:
###### You will need to type the following command in the root folder.
``` cp .env.example .env ```
###### You also need to add MongoDB URI to the enviorment variable.
``` MONGODB_URI=YOUR_MONGODB_URI ```

###### CLI
```
npm run install
```

```
npm run seed
```

```
npm run start
```

#### Project Visuals :sunglasses:
<img width="1156" alt="Screenshot" src="https://res.cloudinary.com/dasr4nopa/image/upload/v1641751918/Untitled_pfplau.jpg">
   
#### User Story 📖

> AS a senior engineer working on an e-commerce platform     
> I WANT my platform to use Redux to manage global state instead of the Context API
> SO THAT my website's state management is taken out of the React ecosystem  

#### Acceptance Criteria ✅

> GIVEN an e-commerce platform that uses Redux to manage global state
> WHEN I review the app’s store
> THEN I find that the app uses a Redux store instead of the Context API
> WHEN I review the way the React front end accesses the store
> THEN I find that the app uses a Redux provider
> WHEN I review the way the app determines changes to its global state
> THEN I find that the app passes reducers to a Redux store instead of using the Context API
> WHEN I review the way the app extracts state data from the store
> THEN I find that the app uses Redux instead of the Context API
> WHEN I review the way the app dispatches actions
> THEN I find that the app uses Redux instead of the Context API 

#### Information and Resources Used

- [React](https://www.npmjs.com/package/react)
- [Redux](https://www.npmjs.com/package/redux)
- [Apollo Client](https://www.npmjs.com/package/@apollo/client)
- [GraphQL](https://www.npmjs.com/package/graph.ql)

