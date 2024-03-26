import MotionDiv from "../components/MotionDiv";

const SectionWrapper = (Component: React.FunctionComponent, idName: string) =>
  function HOC() {
    return (
      <MotionDiv
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.5 }}
        className='h-screen bg-gray-950 flex justify-center p-0'
        id={idName}
      >
        <Component />
      </MotionDiv>
    );
  };

export default SectionWrapper;
