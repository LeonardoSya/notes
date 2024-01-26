## 依赖安装
cd <your new project directory>
npm install react-router-dom localforage match-sorter sort-by

## 
为了解耦，router应该在React tree之外创建

As we discussed earlier, <Form> prevents the browser from sending the request to the server and sends it to your route action instead. In web semantics, a POST usually means some data is changing. By convention, React Router uses this as a hint to automatically revalidate the data on the page after the action finishes. That means all of your useLoaderData hooks update and the UI stays in sync with your data automatically! Pretty cool.