import create from "zustand";

const useStore = create(() => ({
  test: 0, //변수 테스트
  test2: () => {
    console.log("qwe"); //함수 테스트
  },
  test3: 0,
  //여기부터는 드래프트
  MEMBER_NAME: null,
  MENBER_PW: null,
  MEMBER_CLASS: null,
  MEMBER_GACHI: null,
}));

export default useStore;
