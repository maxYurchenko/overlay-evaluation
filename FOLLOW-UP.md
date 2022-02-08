## How long did you spend on the evaluation?

25-30

## Which parts are you most proud of? And why?

The best part in my view is the chart. I tried making it as much scalable and reusable as possible. At start it was a bit hard to understand the amcharts documentation, but later on I understood how to read and work with it, so solving new tasks and bugs were fast and simple. There are still much room for improvement I can see right now in a chart, including performance, but I like the result and possibility to scale the chart and reuse it's components in other charts with minimum code changes.

The chart loader was also a great puzzle, which I enjoyed working with it and had a chance to enable my imagination and even added animation to it. The loader itself even without a chart looks cool to me.

Also I used react-virtualized components to create a table to make it much more optimized for large datasets, making it's rendering fast even on slow computers.

## Which parts did you spend the most time on? What was the most difficult aspect?

Material UI. It took most of the time I spent on this whole task including backend, hosting and setup in general. My career was mostly related to backend/serverside work, and some concepts I used might be outdated and required me to learn much new, reading forums and watching videos to understand how to build the page using material ui. This led to multiple recreations of application from scratch, rewriting big amounts of styles and moving components and wrappers back and forth. As mentioned, this took the biggest amount of time of the evaluation.

## How did you like the evaluation overall? Did you run into any issues or have trouble completing?

I enjoyed solving requests provided in evaluation. There was a single thing not clear to me - correct approach of displaying line series on a chart. Data that comes from an API differs a lot between column(thousands) and line(percent), so the question to me was are these two datasets independent, or is the line series should be built based on data from column series. it was simple to solve in my case - there are two charts on wireframe, and the chart is built reusabe and scalable, so I just added a small new function to process data before rendering and it led to two separate and totally different charts on a page.

## Do you have any suggestions or improvements for how we could improve the evaluation in your mind?

As mentioned in a previous part, data rendering on chart might be a bit confusing. In general, the task is written clear and understandable. All the aspects are covered and providing a GraphQL query is a great bonus.
