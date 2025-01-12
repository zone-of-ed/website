export default function Question() {
  return <div className="interview-questions-panel">
    <h3>Explain some benefits of Python?</h3>
    <div className="question"
         dangerouslySetInnerHTML={{
           __html: 'Python is a dynamic-typed language. It means that you don’t need to mention the data type of variables during their declaration.\n' +
             'Python supports object-orientated programming as you can define classes along with the composition and inheritance.\n' +
             'Functions in Python are like first-class objects. It suggests you can assign them to variables, return from other methods and pass them as arguments.\n' +
             'Developing using Python is quick but running it is often slower than compiled languages.\n' +
             'Python has several usages like web-based applications, test automation, data modeling, big data analytics, and much more.',
         }} />
  </div>;
}