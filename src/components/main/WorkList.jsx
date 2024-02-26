import WorkThumb from './WorkThumb';
import workData from '../../data/workData.json';

const WorkList = () => {
  const WorkListUl = workData
    .sort(() => Math.random() - 0.5)
    .map((work) => {
      return (
        <WorkThumb
          key={work.id}
          name={work.name}
          src={'/src/assets/workThumbs/' + work.id + '.jpg'}
        />
      );
    });

  return <ul>{WorkListUl}</ul>;
};

export default WorkList;
