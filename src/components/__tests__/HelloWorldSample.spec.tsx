import { updateInputValues } from "../../utils/utils";

describe("HelloWorldSample", () => {
    it("should render the structure correctly", () => {
        // not written.
    });

    it("should return numeric array", () => {
        expect(updateInputValues(1, [], "23", "numeric")).toEqual(["2"]);
    });
    it("should not return alphabetic array", () => {
        expect(updateInputValues(1, [], "23", "alphabetic")).toEqual([""]);
    });
    it("should return alphabetic array", () => {
        expect(updateInputValues(1, [], "as", "alphabetic")).toEqual(["a"]);
    });
    it("should return alphanumeric array", () => {
        expect(updateInputValues(4, [], "23aa", "alphanumeric")).toEqual(["2", "3", "a", "a"]);
    });
    it("should return string array with empty values", () => {
        expect(updateInputValues(0, [], undefined, undefined)).toEqual([]);
    });
});
