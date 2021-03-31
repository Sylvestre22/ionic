import { TestBed } from '@angular/core/testing';

import { FeedsService } from './feeds.service';

describe('FeedsService test les variables', () => {
    let service: FeedsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FeedsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});