export class CacheBucket {
    constructor() {
        this.keys = new Set();
    }
    add(key) {
        this.keys.add(key);
    }
    has(key) {
        return this.keys.has(key);
    }
    forEach(cb) {
        this.keys.forEach(cb);
    }
    delete(key) {
        this.keys.delete(key);
    }
    clear() {
        this.keys.clear();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGVCdWNrZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9uZ25lYXQvY2FzaGV3L3NyYy9saWIvY2FjaGVCdWNrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLFdBQVc7SUFBeEI7UUFDVSxTQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQXFCM0IsQ0FBQztJQW5CQyxHQUFHLENBQUMsR0FBVztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELE9BQU8sQ0FBQyxFQUFFO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2FjaGVCdWNrZXQge1xuICBwcml2YXRlIGtleXMgPSBuZXcgU2V0KCk7XG5cbiAgYWRkKGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5rZXlzLmFkZChrZXkpO1xuICB9XG5cbiAgaGFzKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMua2V5cy5oYXMoa2V5KTtcbiAgfVxuXG4gIGZvckVhY2goY2IpIHtcbiAgICB0aGlzLmtleXMuZm9yRWFjaChjYik7XG4gIH1cblxuICBkZWxldGUoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLmtleXMuZGVsZXRlKGtleSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmtleXMuY2xlYXIoKTtcbiAgfVxufVxuIl19